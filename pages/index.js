import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideBar from '../components/SideBar'
import TopNavigation from '../components/TopNavigation'
import ChannelBar from '../components/ChannelBar'
import ContentContainer from '../components/ContentContainer'

export default function Home() {
  return (
    <div className='flex'>
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  )
}
