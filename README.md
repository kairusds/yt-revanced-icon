# yt-revanced-icon
revanced-patches repacked with custom icons using Github Actions.
The custom icons are located in the `custom-branding` directory.
## `all`

<details>

`Export all activities`: Makes all app activities exportable.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Hide ADB status`: Hides enabled development settings and/or ADB.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `no`

---

`Hide app icon`: Hides the app icon from the Android launcher.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Spoof build info`: Spoofs the information about the current build.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `board` | The name of the underlying board |
| `like "goldfish".` | undefined |
| `bootloader` | The system bootloader version number. |
| `brand` | The consumer-visible brand with which the product/hardware will be associated |
| `if any.` | undefined |
| `cpu-abi` | This field was deprecated in API level 21. Use SUPPORTED_ABIS instead. |
| `cpu-abi-2` | This field was deprecated in API level 21. Use SUPPORTED_ABIS instead. |
| `device` | The name of the industrial design. |
| `display` | A build ID string meant for displaying to the user. |
| `fingerprint` | A string that uniquely identifies this build. |
| `hardware` | The name of the hardware (from the kernel command line or /proc). |
| `host` | The host. |
| `id` | Either a changelist number |
| `or a label like "M4-rc20".` | undefined |
| `manufacturer` | The manufacturer of the product/hardware. |
| `model` | The end-user-visible name for the end product. |
| `odm-sku` | The SKU of the device as set by the original design manufacturer (ODM). |
| `product` | The name of the overall product. |
| `radio` | This field was deprecated in API level 15. The radio firmware version is frequently not available when this class is initialized |
| `leading to a blank or "unknown" value for this string. Use getRadioVersion() instead.` | undefined |
| `serial` | This field was deprecated in API level 26. Use getSerial() instead. |
| `sku` | The SKU of the hardware (from the kernel command line). |
| `soc-manufacturer` | The manufacturer of the device's primary system-on-chip. |
| `soc-model` | The model name of the device's primary system-on-chip. |
| `tags` | Comma-separated tags describing the build |
| `like "unsigned,debug".` | undefined |
| `time` | The time at which the build was produced |
| `given in milliseconds since the UNIX epoch.` | undefined |
| `type` | The type of build |
| `like "user" or "eng".` | undefined |
| `user` | The user. |
</details>

---

`Hide mock location`: Prevents the app from knowing the device location is being mocked by a third party app.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `no`

---

`Spoof SIM country`: Spoofs country information returned by the SIM card provider.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `networkCountryIso` | ISO-3166-1 alpha-2 country code equivalent for the SIM provider's country code. |
| `simCountryIso` | ISO-3166-1 alpha-2 country code equivalent for the SIM provider's country code. |
</details>

---

`Spoof Wi-Fi connection`: Spoofs an existing Wi-Fi connection.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `no`

---

`Enable Android debugging`: Enables Android debugging capabilities. This can slow down the app.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Export internal data documents provider`: Exports a documents provider that grants access to the internal data directory of this app to file managers and other apps that support the Storage Access Framework.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `no`

---

`Hex`: Replaces a hexadecimal patterns of bytes of files in an APK.

Target version: `all`

Dependencies: `RawResourcePatch`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `replacements` | Hexadecimal patterns to search for and replace with another in a target file.

A pattern is a sequence of case insensitive strings |
| `each representing hexadecimal bytes` | undefined |
| `separated by spaces.
An example pattern is 'aa 01 02 FF'.

Every pattern must be followed by a pipe ('|')` | undefined |
| `the replacement pattern,
another pipe ('|')` | undefined |
| `and the path to the file to make the changes in relative to the APK root. 
The replacement pattern must be shorter or equal in length to the pattern.

Full example of a valid replacement` | 
'01 02 aa FF|03 04|path/to/file' |
</details>

---

`Predictive back gesture`: Enables the predictive back gesture introduced on Android 13.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Override certificate pinning`: Overrides certificate pinning, allowing to inspect traffic via a proxy.

Target version: `all`

Dependencies: `Enable Android debugging`

Included by default: `no`

---

`Change package name`: Appends ".revanced" to the package name by default. Changing the package name of the app can lead to unexpected issues.

Target version: `all`

Dependencies: `none`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `packageName` | The name of the package to rename the app to. |
| `updatePermissions` | Update compatibility receiver permissions. Enabling this can fix installation errors |
| `but this can also break features in certain apps.` | undefined |
| `updateProviders` | Update provider names declared by the app. Enabling this can fix installation errors |
| `but this can also break features in certain apps.` | undefined |
</details>

---

`Remove screen capture restriction`: Removes the restriction of capturing audio from apps that normally wouldn't allow it.

Target version: `all`

Dependencies: `ResourcePatch`, `BytecodePatch`

Included by default: `no`

---

`Remove screenshot restriction`: Removes the restriction of taking screenshots in apps that normally wouldn't allow it.

Target version: `all`

Dependencies: `BytecodePatch`, `BytecodePatch`

Included by default: `no`

---

`Remove share targets`: Removes share targets like directly sharing to a frequent contact.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Enable ROM signature spoofing`: Spoofs the signature via the manifest meta-data "fake-signature". This patch only works with ROMs that support signature spoofing.

Target version: `all`

Dependencies: `none`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `signatureOrApkFilePath` | The hex-encoded signature or path to an APK file with the desired signature. |
</details>

---

`Set target SDK version 34`: Changes the target SDK to version 34 (Android 14). For devices running Android 15+, this will disable edge-to-edge display.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Change version code`: Changes the version code of the app. This will turn off app store updates and allows downgrading an existing app install to an older app version.

Target version: `all`

Dependencies: `none`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `versionCode` | The version code to use. Using the highest value turns off app store updates and allows downgrading an existing app install to an older app version. |
</details>

---

`Disable Pairip license check`: Disables Play Integrity API (Pairip) client-side license check.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

</details>

## `at.gv.bka.serviceportal`

<details>

`Remove root detection`: Removes the check for root permissions and unlocked bootloader.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `at.gv.bmf.bmf2go`

<details>

`Remove bootloader detection`: Removes the check for an unlocked bootloader.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Remove root detection`: Removes the check for root permissions.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `at.gv.oe.app`

<details>

`Remove root detection`: Removes the check for root permissions and unlocked bootloader.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Spoof signature`: Spoofs the signature of the app.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `at.willhaben`

<details>

`Hide ads`: Hides all in-app ads.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `ch.protonmail.android`

<details>

`Remove free accounts limit`: Removes the limit for maximum free accounts logged in.

Target version: `4.15.0`

Dependencies: `none`

Included by default: `yes`

---

`Remove 'Sent from' signature`: Removes the 'Sent from Proton Mail mobile' signature from emails.

Target version: `4.15.0`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.adobe.lrmobile`

<details>

`Disable mandatory login`: null

Target version: `9.3.0`

Dependencies: `none`

Included by default: `yes`

---

`Unlock Premium`: null

Target version: `9.3.0`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.amazon.avod.thirdpartyclient`

<details>

`Skip ads`: Automatically skips video stream ads.

Target version: `3.0.412.2947`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Rename shared permissions`: Rename certain permissions shared across Amazon apps. Applying this patch can fix installation errors, but can also break features in certain apps.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Playback speed`: Adds playback speed controls to the video player.

Target version: `3.0.412.2947`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

</details>

## `com.amazon.mShop.android.shopping`

<details>

`Always allow deep-linking`: Open Amazon links, even if the app is not set to handle Amazon links.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.andrewshu.android.reddit`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `com.andrewshu.android.redditdonation`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `com.bandcamp.android`

<details>

`Remove play limits`: Disables purchase nagging and playback limits of not purchased tracks.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.cricbuzz.android`

<details>

`Hide ads`: null

Target version: `6.24.01`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

</details>

## `com.crunchyroll.crunchyroid`

<details>

`Hide ads`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.drinkplusplus.angulus`

<details>

`Hide ads`: null

Target version: `all`

Dependencies: `Disable Pairip license check`

Included by default: `yes`

---

</details>

## `com.duolingo`

<details>

`Disable ads`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Enable debug menu`: null

Target version: `5.158.4`

Dependencies: `none`

Included by default: `no`

---

</details>

## `com.facebook.katana`

<details>

`Hide 'Sponsored Stories'`: null

Target version: `490.0.0.63.82`

Dependencies: `none`

Included by default: `yes`

---

`Hide story ads`: Hides the ads in the Facebook app stories.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.facebook.orca`

<details>

`Hide inbox ads`: Hides ads in inbox.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Hide inbox subtabs`: Hides Home and Channels tabs between active now tray and chats.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Disable typing indicator`: Disables the indicator while typing a message.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Hide Facebook button`: Hides the Facebook button in the top toolbar.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Remove Meta AI`: Removes UI elements related to Meta AI.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

</details>

## `com.google.android.apps.magazines`

<details>

`Enable CustomTabs`: Enables CustomTabs to open articles in your default browser.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`GmsCore support`: Allows the app to work without root by using a different package name when patched using a GmsCore instead of Google Play Services.

Target version: `5.108.0.644447823`

Dependencies: `Change package name`, `ResourcePatch`, `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `gmsCoreVendorGroupId` | The vendor's group ID for GmsCore. |
</details>

---

</details>

## `com.google.android.apps.photos`

<details>

`Enable DCIM folders backup control`: Disables always on backup for the Camera and other DCIM folders, allowing you to control backup for each folder individually. This will make the app default to having no folders backed up.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Spoof features`: Spoofs the device to enable Google Pixel exclusive features, including unlimited storage.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `featuresToEnable` | Google Pixel exclusive features to enable. Features up to Pixel XL enable the unlimited storage feature. |
| `featuresToDisable` | Google Pixel exclusive features to disable.Features after Pixel XL may have to be disabled for unlimited storage depending on the device. |
</details>

---

`GmsCore support`: Allows the app to work without root by using a different package name when patched using a GmsCore instead of Google Play Services.

Target version: `all`

Dependencies: `Change package name`, `ResourcePatch`, `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `gmsCoreVendorGroupId` | The vendor's group ID for GmsCore. |
</details>

---

</details>

## `com.google.android.apps.recorder`

<details>

`Remove device restrictions`: Removes restrictions from using the app on any device. Requires mounting patched app over original.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.google.android.apps.youtube.music`

<details>

`Hide music video ads`: Adds an option to hide ads that appear while listening to or streaming music videos, podcasts, or songs.

Target version: `7.29.52`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Enable exclusive audio playback`: Enables the option to play audio without video.

Target version: `7.29.52`

Dependencies: `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

`Permanent repeat`: Adds an option to always repeat even if the playlist ends or another track is played.

Target version: `7.29.52`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Hide category bar`: Adds an option to hide the category bar at the top of the homepage.

Target version: `7.29.52`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Hide 'Get Music Premium'`: Adds an option to hide the "Get Music Premium" label in the settings and account menu.

Target version: `7.29.52`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Hide upgrade button`: Hides the upgrade tab from the pivot bar.

Target version: `7.29.52`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Bypass certificate checks`: Bypasses certificate checks which prevent YouTube Music from working on Android Auto.

Target version: `7.29.52`

Dependencies: `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

`Remove background playback restrictions`: Removes restrictions on background playback, including playing kids videos in the background.

Target version: `7.29.52`

Dependencies: `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

`GmsCore support`: Allows the app to work without root by using a different package name when patched using a GmsCore instead of Google Play Services.

Target version: `all`

Dependencies: `Change package name`, `ResourcePatch`, `BytecodePatch`, `Spoof video streams`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `gmsCoreVendorGroupId` | The vendor's group ID for GmsCore. |
</details>

---

`Spoof video streams`: Adds options to spoof the client video streams to fix playback.

Target version: `7.29.52`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`, `BytecodePatch`

Included by default: `yes`

---

</details>

## `com.google.android.youtube`

<details>

`Hide ads`: Adds options to remove general ads.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `ResourcePatch`, `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

`Video ads`: Adds an option to remove ads in the video player.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Copy video URL`: Adds options to display buttons in the video player to copy video URLs.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `ResourcePatch`, `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

`Remove viewer discretion dialog`: Adds an option to remove the dialog that appears when opening a video that has been age-restricted by accepting it automatically. This does not bypass the age restriction.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Disable double tap actions`: Adds an option to disable player double tap gestures.

Target version: `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Downloads`: Adds support to download videos with an external downloader app using the in-app download button or a video player action button.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `ResourcePatch`, `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

`Seekbar`: Adds options to disable precise seeking when swiping up on the seekbar, slide to seek instead of playing at 2x speed when pressing and holding, tapping the player seekbar to seek, and hiding the video player seekbar.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `BytecodePatch`, `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

`Swipe controls`: Adds options to enable and configure volume and brightness swipe controls.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Disable auto captions`: Adds an option to disable captions from being automatically enabled.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Custom branding`: Applies a custom app name and icon. Defaults to "YouTube ReVanced" and the ReVanced logo.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `ResourcePatch`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `appName` | The name of the app. |
| `iconPath` | The icon to apply to the app.

If a path to a folder is provided |
| `the folder must contain the following folders` | 

- mipmap-xxxhdpi
- mipmap-xxhdpi
- mipmap-xhdpi
- mipmap-hdpi
- mipmap-mdpi

Each of these folders must contain the following files |
</details>

---

`Change header`: Adds an option to change the header logo in the top left corner of the app.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `ResourcePatch`, `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `custom` | Folder with images to use as a custom header logo.

The folder must contain one or more of the following folders |
| `depending on the DPI of the device` | 
- drawable-xxxhdpi
- drawable-xxhdpi
- drawable-xhdpi
- drawable-hdpi
- drawable-mdpi

Each of the folders must contain all of the following files |
</details>

---

`Hide video action buttons`: Adds options to hide action buttons (such as the Download button) under videos.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `ResourcePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Navigation buttons`: Adds options to hide and change navigation buttons (such as the Shorts button).

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Hide player overlay buttons`: Adds options to hide the player Cast, Autoplay, Captions, Previous & Next buttons, and the player control buttons background.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`Change form factor`: Adds an option to change the UI appearance to a phone, tablet, or automotive device.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `Navigation buttons`

Included by default: `yes`

---

`Hide end screen cards`: Adds an option to hide suggested video cards at the end of videos.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Hide end screen suggested video`: Adds an option to hide the suggested video at the end of videos.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Disable fullscreen ambient mode`: Adds an option to disable the ambient mode when in fullscreen.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Hide layout components`: Adds options to hide general layout components.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`, `BytecodePatch`

Included by default: `yes`

---

`Hide info cards`: Adds an option to hide info cards that creators add in the video player.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Hide player flyout menu items`: Adds options to hide menu items that appear when pressing the gear icon in the video player.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Hide related video overlay`: Adds an option to hide the related video overlay shown when swiping up in fullscreen.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`Disable rolling number animations`: Adds an option to disable rolling number animations of video view count, user likes, and upload time.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Hide Shorts components`: Adds options to hide components related to Shorts.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `hideShortsAppShortcut` | Permanently hides the shortcut to open Shorts when long pressing the app icon in your launcher. |
| `hideShortsWidget` | Permanently hides the launcher widget Shorts button. |
</details>

---

`Disable sign in to TV popup`: Adds an option to disable the popup asking to sign into a TV on the same local network.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`Hide timestamp`: Adds an option to hide the timestamp in the bottom left of the video player.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Miniplayer`: Adds options to change the in-app minimized player.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`Disable player popup panels`: Adds an option to disable panels (such as live chat) from opening automatically.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Exit fullscreen mode`: Adds options to automatically exit fullscreen mode when a video reaches the end.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

`Open videos fullscreen`: Adds an option to open videos in full screen portrait mode.

Target version: `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`Custom player overlay opacity`: Adds an option to change the opacity of the video player background when player controls are visible.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `ResourcePatch`

Included by default: `yes`

---

`Return YouTube Dislike`: Adds an option to show the dislike count of videos with Return YouTube Dislike.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `BytecodePatch`, `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Wide search bar`: Adds an option to replace the search icon with a wide search bar. This will hide the YouTube logo when active.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`Shorts autoplay`: Adds options to automatically play the next Short.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`Open Shorts in regular player`: Adds options to open Shorts in the regular video player.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`SponsorBlock`: Adds options to enable and configure SponsorBlock, which can skip undesired video segments such as sponsored content.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `BytecodePatch`, `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Spoof app version`: Adds an option to trick YouTube into thinking you are running an older version of the app. This can be used to restore old UI elements and features.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `ResourcePatch`, `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`Change start page`: Adds an option to set which page the app opens in instead of the homepage.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Disable resuming Shorts on startup`: Adds an option to disable the Shorts player from resuming on app startup when Shorts were last being watched.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Theme`: Adds options for theming and applies a custom background theme (dark background theme defaults to amoled black).

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `darkThemeBackgroundColor` | Can be a hex color (#AARRGGBB) or a color resource reference. |
| `lightThemeBackgroundColor` | Can be a hex color (#AARRGGBB) or a color resource reference. |
</details>

---

`Alternative thumbnails`: Adds options to replace video thumbnails using the DeArrow API or image captures from the video.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

`Bypass image region restrictions`: Adds an option to use a different host for user avatar and channel images and can fix missing images that are blocked in some countries.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `BytecodePatch`

Included by default: `yes`

---

`Announcements`: Adds an option to show announcements from ReVanced on app startup.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Always repeat`: Adds an option to always repeat videos when they end.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Remove background playback restrictions`: Removes restrictions on background playback, including playing kids videos in the background.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `ResourcePatch`, `BytecodePatch`, `BytecodePatch`, `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Enable debugging`: Adds options for debugging and exporting ReVanced logs to the clipboard.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`Spoof device dimensions`: Adds an option to spoof the device dimensions which can unlock higher video qualities.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Check watch history domain name resolution`: Checks if the device DNS server is preventing user watch history from being saved.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`GmsCore support`: Allows the app to work without root by using a different package name when patched using a GmsCore instead of Google Play Services.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `Change package name`, `ResourcePatch`, `BytecodePatch`, `Hide player overlay buttons`, `Spoof video streams`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `gmsCoreVendorGroupId` | The vendor's group ID for GmsCore. |
</details>

---

`Disable haptic feedback`: Adds an option to disable haptic feedback in the player for various actions.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Bypass URL redirects`: Adds an option to bypass URL redirects and open the original URL directly.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`Open links externally`: Adds an option to always open links in your browser instead of the in-app browser.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Remove tracking query parameter`: Adds an option to remove the tracking parameter from links you share.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`

Included by default: `yes`

---

`Spoof video streams`: Adds options to spoof the client video streams to fix playback.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`Force original audio`: Adds an option to always use the original audio track.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

`Disable HDR video`: Adds an option to disable video HDR.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `ResourcePatch`, `BytecodePatch`

Included by default: `yes`

---

`Video quality`: Adds options to use the advanced video quality menu and set default video qualities.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

`Playback speed`: Adds options to customize available playback speeds, set default a playback speed, and show a speed dialog button in the video player.

Target version: `19.34.42`, `19.43.41`, `19.47.53`, `20.07.39`, `20.12.46`, `20.13.41`

Dependencies: `BytecodePatch`, `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

</details>

## `com.instagram.android`

<details>

`Hide ads`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Hide explore feed`: Hides posts and reels from the explore/search page.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Hide navigation buttons`: Hides navigation bar buttons, such as the Reels and Create button.

Target version: `397.1.0.52.81`

Dependencies: `none`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `hideReels` | Permanently hides the Reels button. |
| `hideCreate` | Permanently hides the Create button. |
</details>

---

`Hide Stories from Home`: Hides Stories from the main page, by removing the buttons.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Disable signature check`: Disables the signature check that causes the app to crash on startup.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.instagram.barcelona`

<details>

`Hide ads`: null

Target version: `382.0.0.51.85`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.laurencedawson.reddit_sync`

<details>

`Disable ads`: null

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Disable Sync for Lemmy bottom sheet`: Disables the bottom sheet at the startup that asks you to signup to "Sync for Lemmy".

Target version: `v23.06.30-13:39`

Dependencies: `none`

Included by default: `yes`

---

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Fix Redgifs API`: null

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Fix /s/ links`: null

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Fix post thumbnails`: Fixes loading post thumbnails by correcting their URLs.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Use /user/ endpoint`: Replaces the deprecated endpoint for viewing user profiles /u with /user, that used to fix a bug.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Fix video downloads`: Fixes a bug in Sync's MPD parser resulting in only the audio-track being saved.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

</details>

## `com.laurencedawson.reddit_sync.dev`

<details>

`Disable Sync for Lemmy bottom sheet`: Disables the bottom sheet at the startup that asks you to signup to "Sync for Lemmy".

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Fix Redgifs API`: null

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Fix /s/ links`: null

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Fix post thumbnails`: Fixes loading post thumbnails by correcting their URLs.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Use /user/ endpoint`: Replaces the deprecated endpoint for viewing user profiles /u with /user, that used to fix a bug.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Fix video downloads`: Fixes a bug in Sync's MPD parser resulting in only the audio-track being saved.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

</details>

## `com.laurencedawson.reddit_sync.pro`

<details>

`Disable Sync for Lemmy bottom sheet`: Disables the bottom sheet at the startup that asks you to signup to "Sync for Lemmy".

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Fix Redgifs API`: null

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Fix /s/ links`: null

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Fix post thumbnails`: Fixes loading post thumbnails by correcting their URLs.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Use /user/ endpoint`: Replaces the deprecated endpoint for viewing user profiles /u with /user, that used to fix a bug.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Fix video downloads`: Fixes a bug in Sync's MPD parser resulting in only the audio-track being saved.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

</details>

## `com.microblink.photomath`

<details>

`Spoof device ID`: Spoofs device ID to mitigate manual bans by developers.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Hide update popup`: Prevents the update popup from showing up.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Unlock plus`: null

Target version: `all`

Dependencies: `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

</details>

## `com.myfitnesspal.android`

<details>

`Hide ads`: Hides most of the ads across the app.

Target version: `24.14.2`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.myprog.hexedit`

<details>

`Disable ads`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.nis.app`

<details>

`Hide ads`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.nousguide.android.orftvthek`

<details>

`Remove root detection`: Removes the check for root permissions.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.onelouder.baconreader`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Fix Redgifs API`: null

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

</details>

## `com.onelouder.baconreader.premium`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Fix Redgifs API`: null

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

</details>

## `com.pandora.android`

<details>

`Disable audio ads`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Enable unlimited skips`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.piccomaeurope.fr`

<details>

`Spoof Android device ID`: Spoofs the Android device ID used by the app for account authentication.This can be used to copy the account to another device.

Target version: `6.4.0`, `6.4.1`, `6.4.2`, `6.4.3`, `6.4.4`, `6.4.5`, `6.5.0`, `6.5.1`, `6.5.2`, `6.5.3`, `6.5.4`, `6.6.0`, `6.6.1`, `6.6.2`

Dependencies: `none`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `android-device-id` | The Android device ID to spoof to. |
</details>

---

`Disable tracking`: Disables tracking by replacing tracking URLs with example.com.

Target version: `6.4.0`, `6.4.1`, `6.4.2`, `6.4.3`, `6.4.4`, `6.4.5`, `6.5.0`, `6.5.1`, `6.5.2`, `6.5.3`, `6.5.4`, `6.6.0`, `6.6.1`, `6.6.2`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.rarlab.rar`

<details>

`Hide purchase reminder`: Hides the popup that reminds you to purchase the app.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.reddit.frontpage`

<details>

`Hide ads`: null

Target version: `2024.17.0`

Dependencies: `ResourcePatch`, `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

`Disable screenshot popup`: Disables the popup that shows up when taking a screenshot.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Unlock Premium icons`: Unlocks the Reddit Premium icons.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Sanitize sharing links`: Removes (tracking) query parameters from the URLs when sharing links.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.rubenmayayo.reddit`

<details>

`Disable ads`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Fix missing audio in video downloads`: Fixes audio missing in videos downloaded from v.redd.it.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Fix Redgifs API`: null

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Fix /s/ links`: null

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

</details>

## `com.sony.songpal.mdr`

<details>

`Remove badge tab`: Removes the badge tab from the activity tab.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Remove notification badge`: Removes the red notification badge from the activity tab.

Target version: `10.1.0`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.soundcloud.android`

<details>

`Hide ads`: null

Target version: `2025.05.27-release`

Dependencies: `none`

Included by default: `yes`

---

`Disable telemetry`: Disables SoundCloud's telemetry system.

Target version: `2025.05.27-release`

Dependencies: `none`

Included by default: `yes`

---

`Enable offline sync`: null

Target version: `2025.05.27-release`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.spotify.music`

<details>

`Hide Create button`: Hides the "Create" button in the navigation bar.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Custom theme`: Applies a custom theme (defaults to amoled black)

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `backgroundColor` | The background color. Can be a hex color or a resource reference. |
| `overridePlayerGradientColor` | Apply primary background color to the player gradient color |
| `which changes dynamically with the song.` | undefined |
| `backgroundColorSecondary` | The secondary background color. (e.g. playlist list in home |
| `player artist` | undefined |
| `song credits). Can be a hex color or a resource reference.",` | undefined |
| `accentColor` | The accent color ('Spotify green' by default). Can be a hex color or a resource reference. |
| `accentColorPressed` | The color when accented buttons are pressed |
| `by default slightly darker than accent. Can be a hex color or a resource reference.` | undefined |
</details>

---

`Fix Facebook login`: Fix logging in with Facebook when the app is patched by always opening the login in a web browser window.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Change lyrics provider`: Changes the lyrics provider to a custom one.

Target version: `all`

Dependencies: `none`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `lyricsProviderHost` | The domain name or IP address of a custom lyrics provider. |
</details>

---

`Sanitize sharing links`: Removes the tracking query parameters from links before they are shared.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Fix third party launchers widgets`: Fixes Spotify widgets not working in third party launchers, like Nova Launcher.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.ss.android.ugc.trill`

<details>

`Feed filter`: Removes ads, livestreams, stories, image videos and videos with a specific amount of views or likes from the feed.

Target version: `36.5.4`

Dependencies: `BytecodePatch`, `Settings`

Included by default: `yes`

---

`Remember clear display`: Remembers the clear display configurations in between videos.

Target version: `36.5.4`

Dependencies: `none`

Included by default: `yes`

---

`Downloads`: Removes download restrictions and changes the default path to download to.

Target version: `36.5.4`

Dependencies: `BytecodePatch`, `Settings`

Included by default: `yes`

---

`Show seekbar`: Shows progress bar for all video.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Playback speed`: Enables the playback speed option for all videos and retains the speed configurations in between videos.

Target version: `36.5.4`

Dependencies: `none`

Included by default: `yes`

---

`Disable login requirement`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Fix Google login`: Allows logging in with a Google account.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Settings`: Adds ReVanced settings to TikTok.

Target version: `36.5.4`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`SIM spoof`: Spoofs the information which is retrieved from the SIM card.

Target version: `all`

Dependencies: `BytecodePatch`, `Settings`

Included by default: `no`

---

</details>

## `com.strava`

<details>

`Unlock subscription features`: Unlocks "Routes", "Matched Runs" and "Segment Efforts".

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Disable subscription suggestions`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.swisssign.swissid.mobile`

<details>

`Remove Google Play Integrity check`: Removes the Google Play Integrity check. With this it's possible to use SwissID on custom ROMS.If the device is rooted, root permissions must be hidden from the app.

Target version: `5.2.9`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.ticktick.task`

<details>

`Unlock themes`: Unlocks all themes that are inaccessible until a certain level is reached.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.tumblr`

<details>

`Disable dashboard ads`: Disables ads in the dashboard.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Disable Ad-Free Banner`: Disables the banner with a frog, prompting you to buy Tumblr Ad-Free.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Disable in-app update`: Disables the in-app update check and update prompt.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Disable blog notification reminder`: Disables the reminder to enable notifications for blogs you visit.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Disable gift message popup`: Disables the popup suggesting to buy TumblrMart items for other people.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Fix old versions`: Fixes old versions of the app (v33.2 and earlier) breaking due to Tumblr removing remnants of Tumblr Live from the API, which causes many requests to fail. This patch has no effect on newer versions of the app.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

</details>

## `com.twitter.android`

<details>

`Unlock downloads`: Unlocks the ability to download any video. GIFs can be downloaded via the menu on long press.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Hide view count`: Hides the view count of Posts.

Target version: `all`

Dependencies: `none`

Included by default: `no`

---

`Dynamic color`: Replaces the default X (Formerly Twitter) Blue with the user's Material You palette.

Target version: `10.86.0-release.0`, `10.60.0-release.0`, `10.48.0-release.0`

Dependencies: `none`

Included by default: `yes`

---

`Hide ads`: null

Target version: `10.86.0-release.0`, `10.60.0-release.0`, `10.48.0-release.0`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Hide recommended users`: null

Target version: `10.86.0-release.0`, `10.60.0-release.0`, `10.48.0-release.0`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Change link sharing domain`: Replaces the domain name of Twitter links when sharing them.

Target version: `10.86.0-release.0`, `10.60.0-release.0`, `10.48.0-release.0`

Dependencies: `ResourcePatch`, `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `domainName` | The domain name to use when sharing links. |
</details>

---

`Open links with app chooser`: Instead of opening links directly, open them with an app chooser. As a result you can select a browser to open the link with.

Target version: `10.48.0-release.0`

Dependencies: `BytecodePatch`

Included by default: `no`

---

`Sanitize sharing links`: Removes the tracking query parameters from links before they are shared.

Target version: `10.86.0-release.0`, `10.60.0-release.0`, `10.48.0-release.0`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.viber.voip`

<details>

`Hide Ads`: Hides ad banners between chats.

Target version: `25.9.2.0`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.xiaomi.wearable`

<details>

`Force English locale`: Forces wearable devices to use the English locale.

Target version: `all`

Dependencies: `Fix login`

Included by default: `yes`

---

`Fix login`: Fixes login for uncertified Mi Fitness app

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `com.zhiliaoapp.musically`

<details>

`Feed filter`: Removes ads, livestreams, stories, image videos and videos with a specific amount of views or likes from the feed.

Target version: `36.5.4`

Dependencies: `BytecodePatch`, `Settings`

Included by default: `yes`

---

`Remember clear display`: Remembers the clear display configurations in between videos.

Target version: `36.5.4`

Dependencies: `none`

Included by default: `yes`

---

`Downloads`: Removes download restrictions and changes the default path to download to.

Target version: `36.5.4`

Dependencies: `BytecodePatch`, `Settings`

Included by default: `yes`

---

`Show seekbar`: Shows progress bar for all video.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Playback speed`: Enables the playback speed option for all videos and retains the speed configurations in between videos.

Target version: `36.5.4`

Dependencies: `none`

Included by default: `yes`

---

`Disable login requirement`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Fix Google login`: Allows logging in with a Google account.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Settings`: Adds ReVanced settings to TikTok.

Target version: `36.5.4`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`SIM spoof`: Spoofs the information which is retrieved from the SIM card.

Target version: `all`

Dependencies: `BytecodePatch`, `Settings`

Included by default: `no`

---

</details>

## `com.zombodroid.MemeGenerator`

<details>

`Unlock pro`: null

Target version: `4.6364`, `4.6370`, `4.6375`, `4.6377`

Dependencies: `BytecodePatch`, `BytecodePatch`

Included by default: `yes`

---

</details>

## `de.dwd.warnapp`

<details>

`Promo code unlock`: Disables the validation of promo code. Any code will work to unlock all features.

Target version: `4.2.2`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

</details>

## `de.simon.openinghours`

<details>

`Fix crash`: null

Target version: `1.0`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `de.stocard.stocard`

<details>

`Hide offers tab`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

`Hide story bubbles`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `de.tudortmund.app`

<details>

`Show on lockscreen`: Shows student id and student ticket on lockscreen.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

</details>

## `eu.faircode.netguard`

<details>

`Remove broadcasts restriction`: Enables starting/stopping NetGuard via broadcasts.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `free.reddit.news`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `ginlemon.iconpackstudio`

<details>

`Unlock pro`: null

Target version: `2.2 build 016`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `io.syncapps.lemmy_sync`

<details>

`Disable ads`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `it.ipzs.cieid`

<details>

`Bypass root checks`: Removes the restriction to use the app with root permissions or on a custom ROM.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `jp.pxv.android`

<details>

`Hide ads`: null

Target version: `6.141.1`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `me.ccrama.redditslide`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `ml.docilealligator.infinityforreddit`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Unlock subscription`: Unlocks the subscription feature but requires a custom client ID.

Target version: `all`

Dependencies: `Spoof client`

Included by default: `yes`

---

</details>

## `ml.docilealligator.infinityforreddit.patreon`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Unlock subscription`: Unlocks the subscription feature but requires a custom client ID.

Target version: `all`

Dependencies: `Spoof client`

Included by default: `yes`

---

</details>

## `ml.docilealligator.infinityforreddit.plus`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Unlock subscription`: Unlocks the subscription feature but requires a custom client ID.

Target version: `all`

Dependencies: `Spoof client`

Included by default: `yes`

---

</details>

## `net.binarymode.android.irplus`

<details>

`Remove ads`: null

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `nl.sanomamedia.android.nu`

<details>

`Hide ads`: Hide ads and sponsored articles in list pages and remove pre-roll ads on videos.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Spoof certificate`: Spoofs the X-Android-Cert header to allow push messages.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `o.o.joey`

<details>

`Disable ads`: null

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

---

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `o.o.joey.dev`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `o.o.joey.pro`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `BytecodePatch`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `org.totschnig.myexpenses`

<details>

`Unlock pro`: null

Target version: `3.4.9`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `pl.solidexplorer2`

<details>

`Remove file size limit`: Allows opening files larger than 2 MB in the text editor.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `reddit.news`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Dependencies: `none`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `tv.trakt.trakt`

<details>

`Unlock pro`: null

Target version: `1.1.1`

Dependencies: `none`

Included by default: `yes`

---

</details>

## `tv.twitch.android.app`

<details>

`Block audio ads`: Blocks audio ads in streams and VODs.

Target version: `16.9.1`, `25.3.0`

Dependencies: `BytecodePatch`, `Settings`, `ResourcePatch`

Included by default: `yes`

---

`Block embedded ads`: Blocks embedded stream ads using services like Luminous or PurpleAdBlocker.

Target version: `16.9.1`, `25.3.0`

Dependencies: `Block video ads`, `BytecodePatch`, `Settings`

Included by default: `yes`

---

`Block video ads`: Blocks video ads in streams and VODs.

Target version: `16.9.1`, `25.3.0`

Dependencies: `BytecodePatch`, `Settings`, `ResourcePatch`, `BytecodePatch`

Included by default: `yes`

---

`Show deleted messages`: Shows deleted chat messages behind a clickable spoiler.

Target version: `16.9.1`, `25.3.0`

Dependencies: `BytecodePatch`, `Settings`, `ResourcePatch`

Included by default: `yes`

---

`Auto claim channel points`: Automatically claim Channel Points.

Target version: `16.9.1`, `25.3.0`

Dependencies: `Settings`, `ResourcePatch`

Included by default: `yes`

---

`Debug mode`: Enables Twitch's internal debugging mode.

Target version: `16.9.1`, `25.3.0`

Dependencies: `BytecodePatch`, `Settings`, `ResourcePatch`

Included by default: `no`

---

`Settings`: Adds settings menu to Twitch.

Target version: `16.9.1`

Dependencies: `BytecodePatch`, `ResourcePatch`, `ResourcePatch`

Included by default: `yes`

---

</details>

