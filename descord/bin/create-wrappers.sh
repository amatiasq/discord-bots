#!/bin/bash

# cp -r api wrappers

cd wrappers

for i in *.ts
do
    file=$(echo $i | sed -e 's/\.ts$//')

    echo "import { omit } from '../util/omit.ts'
import { ${file}Raw } from '../api/${file}Raw.ts';

export type I$file = ReturnType<typeof wrap$file>;

export function wrap$file(json: ${file}Raw) {
    return {
        ...omit(json, ''),

    };
}
" > $i
done