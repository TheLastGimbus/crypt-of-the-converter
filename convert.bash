#!/bin/bash
for m in $(ls midi/*.mid | xargs -n 1 basename); do
  echo "Converting $m"
  npm run bin --silent "midi/$m" > "notes/$m.txt"
done
