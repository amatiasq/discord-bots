#!/bin/bash

# cp -r api wrappers

cd api

for i in *Raw.ts
do
    type=$(echo $i | sed -e 's/Raw\.ts$//')
    target="../wrappers/$type.ts"

    if [ -f "$target" ]
    then
        continue
    fi

    echo "import { omit } from '../util/omit.ts'
import { ${type}Raw } from '../api/${type}Raw.ts';

export type $type = ReturnType<typeof wrap$type>;

export function wrap$type(json: ${type}Raw) {
    return {
        ...omit(json, ''),

        // Casing
        // TODO:

        // Deserialization
        // TODO:
    };
}
" > $target
done