#!/bin/bash

for i in raw/Raw*.ts
do
    dest=$(echo $i | sed -e 's@^raw/Raw@@')
    cat $i | deno run ./bin/raw-to-wrapped.ts > wrap/$dest
done