#!/bin/bash

# cp -r api transformers

cd transformers

for i in *.ts
do
    file=$(echo $i | sed -e 's/.ts//g')

    echo "import { omit } from '../util/omit.ts'
import { ${file}Raw } from '../api/${file}Raw.ts';

export type I$file = ReturnType<typeof wrap$i>;

export function wrap$file(json: ${file}Raw) {
    return {
        ...omit(json, ''),

    };
}
" > $i
done