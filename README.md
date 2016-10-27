# walnuts-rgb-led
Change color of RGB led on Arduino via web interface on the same network.

## Setup

1. Download or fork this repo.
2. See Fritzing diagram for Arduino wiring
3. Run `npm install`
4. Change YOUR_NETWORK_IP in index.html (see "What's my network IP?")
5. Plug your Arduino
6. Run `node app` or whatever module (PM2, Nodemon, ecc.) you prefer.

## How to use

1. Reach http://YOUR_NETWORK_IP:3000
2. Pick a color
3. Enjoy your RGB Led.

## What's my network IP

Open your terminal and type `ifconfig` for **Mac and Linux** users, `ipconfig` for **Windows** users.
Your network IP is your **IPv4 address**.
