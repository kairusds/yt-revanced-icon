#!/bin/sh

# Script for people who don't want to use Github Actions
# Make sure you have JDK 17 installed

sudo apt update ; sudo apt upgrade ; sudo apt install jq unzip

wget -c $(curl -ksL "https://api.github.com/repos/revanced/revanced-patches/releases/latest" | jq -r ".assets[1].browser_download_url")
old_file=$(find revanced-patches*.jar)
mkdir repack ; mv $old_file repack ; cd repack
unzip revanced-patches*.jar ; rm $old_file
cp -r ../branding . ; jar cvf ../$old_file * ; cd .. ; rm -r repack

echo "Done. $old_file has been generated."
