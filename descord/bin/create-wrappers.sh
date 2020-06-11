#!/bin/bash

# cp -r api wrappers

cd api/raw

for i in *Raw.ts
do
    type=$(echo $i | sed -e 's/Raw\.ts$//')
    target="../wrap/$type.ts"

    if [ -f "$target" ]
    then
        continue
    fi

    echo "import { omit } from '../../util/omit.ts'
import { ${type}Raw } from '../raw/${type}Raw.ts';

export type $type = ReturnType<typeof wrap$type>;

export function wrap$type(x: ${type}Raw) {
    return {
        ...omit(x, ''),

        // Casing
        // TODO:

        // Deserialization
        // TODO:
    };
}

export function unwrap$type(x: $type): ${type}Raw {
    return {
        ...omit(x, ''),

        // Casing
        // TODO:

        // Serialize
        // TODO:
    }
}
" > $target
done