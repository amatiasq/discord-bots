#!/bin/bash

# cp -r api wrappers

for i in api/raw/Raw*.ts
do
    dest=$(echo $i | sed -e 's@^api/raw/Raw@@')
    cat $i | deno run ./bin/raw-to-wrapped.ts > api/wrap/$dest


    # sed -e "s/${type}Raw/Raw$type/g" $i > ../raw2/Raw${type}.ts

#     target="../wrap/$type.ts"

#     if [ -f "$target" ]
#     then
#         continue
#     fi

#     echo "import { omit } from '../../util/omit.ts'
# import { ${type}Raw } from '../raw/${type}Raw.ts';

# export type $type = ReturnType<typeof wrap$type>;

# export function wrap$type(x: ${type}Raw) {
#     return {
#         ...omit(x, ''),

#         // Casing
#         // TODO:

#         // Deserialization
#         // TODO:
#     };
# }

# export function unwrap$type(x: $type): ${type}Raw {
#     return {
#         ...omit(x, ''),

#         // Casing
#         // TODO:

#         // Serialize
#         // TODO:
#     }
# }
# " > $target
done