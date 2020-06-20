#!/bin/bash

declare -a skip=(
    "AuditLogChange"
    "DiscordPayload"
    "Message"
    "Overwrite"
)

ignore() {
    for i in "${skip[@]}"
    do
        if [[ "$1" == *"$i.ts" ]]
        then
            return 0
        fi
    done

    return 1
}

for file in raw/Raw*.ts
do
    if ignore "$file"
    then
        continue
    fi

    dest=$(echo $file | sed -e 's@^raw/Raw@@')
    cat $file | deno run ./bin/raw-to-wrapped.ts > structure/$dest
done
