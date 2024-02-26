import Image from 'next/image'

export const teamInfo = {
  beian: '#', //备案号，！！！！！！必须！！！！！！！
  teamName: '宫商角徵羽' //队伍名称
}

export const TeamLogo = () => {
  return <Image src="/logo.png" alt="logo" priority width={100} height={100} />
}
