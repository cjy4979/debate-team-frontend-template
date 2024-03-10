import Image from 'next/image'

export const teamInfo = {
  beian: '#', //备案号，！！！！！！必须！！！！！！！
  teamName: 'XX辩论队' //队伍名称
}

export const TeamLogo = () => {
  return <Image src="/logo.png" alt="logo" priority width={100} height={100} />
}

export const TeamBanner = () => {
  return (
    <Image src="/banner.jpg" alt="banner" priority width={160} height={64} />
  )
}
