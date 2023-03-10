import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import landingStyles from '@/styles/Landing.module.css'
import Popup from '@/components/popup'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);
  useEffect(()=> {
    setTimeout(() => {
      setShowLogo(false);
    }, 3000);
  }, [])
  return (
    <>
      <Head>
        <title>Smartweb 3.0</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      </Head>
      <main >
        <div>
          <Image
                src="/background-merchant.png"
                className={landingStyles.background}
                alt="background-merchant"
                width={377}
                height={812}
                priority
              />
              {showLogo ?
                <Image
                  src="/logo-merchant.png"
                  className={landingStyles.marchantLogo}
                  alt="13"
                  width={260}
                  height={260}
                  priority /> :
                <Popup
                  
                  title="Are you over 18?" 
                  body=
                  {{title : "Hello There!",
                    main: "You must be 18+ years old to make an order. Kindly note that venue staff may ask your ID proof for age verification. Happy Ordering"}
                  }
                  button="ga tau"/>
              }
        </div>
        
      </main>
    </>
  )
}
