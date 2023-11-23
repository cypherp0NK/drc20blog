---
title: "Mordinals: Unveiling Monero’s Hidden Power for NFTs and Beyond"
excerpt: "With Mordinals, NFTs have found their way to Monero’s blockchain. Just like with Bitcoin ordinals, mordinals allow users to inscribe..."
coverImage: "/assets/blog/mordinals/mordinals.jpg"
date: "2023-11-23T05:35:07.322Z"
author:
  name: Cypherp0NK
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/mordinals/mordinals.jpg"
---

With Mordinals, NFTs have found their way to Monero’s blockchain. Just like with Bitcoin ordinals, mordinals allow users to inscribe additional information with a transaction. Since the creation of Monero in 2014, a field or option called “tx_extra” has always been a part of all transactions. This feature primarily served as a means to include extra data within Monero transactions, but it remained relatively underutilized until the advent of mordinals. Mordinals, short for Monero ordinals, have breathed new life into the world of Monero transactions, introducing exciting possibilities for embedding metadata and expanding the utility of Monero's blockchain.

## **NFTs on Monero**

The integration of Non-Fungible Tokens (NFTs) into the Monero blockchain represents a significant leap forward in the world of digital assets. NFTs, which have gained immense popularity in the blockchain space, are unique digital tokens that represent ownership of distinct, indivisible items such as digital art, collectibles, music, and more. Unlike traditional cryptocurrencies like Bitcoin, NFTs are not interchangeable with one another, making them the ideal choice for representing ownership and authenticity of digital and physical assets.

## **Anonymous Consensus**

One of the most promising and transformative use cases of Mordinals is the possibility of anonymous consensus within the Monero blockchain, creating secure and private voting systems. Secure voting systems are crucial for ensuring fair and tamper-proof elections in corporate and community governance. 
Monero's privacy features, including ring signatures, confidential transactions, and stealth addresses, create an environment where individual votes can be cast anonymously. When coupled with Mordinals, the transaction metadata can be used to embed voting choices securely within Monero transactions.

## **Setting up a Mordinal Inscription: A Step-by-Step Guide**

To set up a Mordinal inscription, you will need to build the Monero wallet CLI and sync to the daemon blockchain. To get the wallet CLI visit https://www.getmonero.org/downloads/#cli and download the software according to your computer’s operating system. Once downloaded and installed, move the downloaded file into your desktop folder for easier visibility.
Download the daemon blockchain from: https://www.getmonero.org/downloads/#blockchain and ensure it is connected to port 18080 on localhost.
Open your computer’s terminal and cd (change directory) into the downloaded software’s folder:

![](https://paper-attachments.dropboxusercontent.com/s_121B5EDB90232DC75DF5694513EE8067E57F51AE0A5F5BFCB3D5BC39A1491FC8_1700731996640_Screenshot+2023-11-23+at+10.32.59.png)


Once in the directory, run the following command to generate a new wallet:


    ./monero-wallet-cli --generate-new-wallet=home/wallets/my_mordinals.xmr

You will be asked to provide a password for the wallet. Input a password, click `Enter` or `Return` on Mac. 


![](https://paper-attachments.dropboxusercontent.com/s_121B5EDB90232DC75DF5694513EE8067E57F51AE0A5F5BFCB3D5BC39A1491FC8_1700731576216_Screenshot+2023-11-23+at+09.37.24.png)


Confirm the password and tell the CLI what language format you would like your seed phrases to be in:

![](https://paper-attachments.dropboxusercontent.com/s_121B5EDB90232DC75DF5694513EE8067E57F51AE0A5F5BFCB3D5BC39A1491FC8_1700732472811_Screenshot+2023-11-23+at+09.37.59.png)


Once specified your new wallet address, private key, and seed phrase will be generated: 


![](https://paper-attachments.dropboxusercontent.com/s_121B5EDB90232DC75DF5694513EE8067E57F51AE0A5F5BFCB3D5BC39A1491FC8_1700733018937_image.png)


Store your key and seed phrases in a safe place before proceeding. Ensure you share it with no one. 
You will be asked to sync your wallet to daemon. Type Y / Yes into the terminal to continue.


![](https://paper-attachments.dropboxusercontent.com/s_121B5EDB90232DC75DF5694513EE8067E57F51AE0A5F5BFCB3D5BC39A1491FC8_1700734995042_Screenshot+2023-11-23+at+11.22.43.png)


After your wallet is successfully synced to daemon, you will be logged into your new wallet’s CLI. 

Prepare your NFT image in ‘.png’ format and create a ‘.txt’ file containing your image description. It is best to store both objects in the same directory. With the `mint_inscription` command you can mint your first NFT into the Monero ecosystem: 


    mint_inscription /home/images/nftImage.png /home/description.txt
## **Transfer NFT  inscription**

To transfer NFTs or other forms of Mordinal inscriptions across the Monero ecosystem, use the `transfer_inscription` along with the inscription’s hash and receiver’s address:


    transfer_inscription <inscription_hash> <receiver>


## **Conclusion: Mordinals and the Future of Monero**

The advent of Mordinals on the Monero blockchain is not just a technological advancement but a paradigm shift in the way we perceive and interact with digital assets. By blending the inherent privacy and security features of Monero with the uniqueness and versatility of NFTs, Mordinals offer a new frontier in blockchain technology. This innovation extends beyond mere digital art and collectibles, opening doors to a wide array of applications including decentralized identity verification, private tokenization, and secure document handling.

