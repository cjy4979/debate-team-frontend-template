import { Login } from '@/api/auth/auth'
import { TeamLogo, teamInfo } from '@/common/setupInfo'
import { signIn } from '@/reduxFeatures/authSlice'
import { useAppDispatch, useAppSelector } from '@/reduxFeatures/hooks'
import { Button, Checkbox, Form, Input, Typography, message } from 'antd'
import router from 'next/router'
import React, { useEffect, useState } from 'react'

const LoginPage = () => {
  const [form] = Form.useForm() //antd提供的对form表单的控制
  const userIsSignIn = useAppSelector((state) => state.auth.isUserSignedIn)
  const signInDispatch = useAppDispatch()

  useEffect(() => {
    if (userIsSignIn) {
      //根据你的逻辑来写
      router.push('/user/index').then(() => {})
    }
  }, [userIsSignIn])

  //进入登陆页面检查是否记住密码，记住密码则直接填充
  useEffect(() => {
    if (localStorage.getItem('check') === '1') {
      if (
        localStorage.getItem('username') !== '' &&
        localStorage.getItem('password') !== ''
      ) {
        form.setFieldsValue({
          username: localStorage.getItem('username'),
          password: localStorage.getItem('password')
        })
      }
    }
  }, [form])

  const onFinish = async (values: any) => {
    const { username, password, remember } = values
    const requestBody = { username, password }
    // 登录逻辑
    const response = await Login(requestBody)
    if (!response || !response.success) {
      message.error('登录出错，请重试')
      return
    }
    if (response.msg !== 'ok') {
      message.error('账号或密码错误')
      return
    }
    const { sessionId, id, role } = response!.data!

    signInDispatch(signIn({ id, sessionId, username, role }))
    message.success({ content: '欢迎' })
    await router.push('/user/index')

    if (remember) {
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      localStorage.setItem('remember', '1')
    } else {
      localStorage.clear()
    }
    return
  }

  const onFinishFailed = (errorInfo: any) => {
    message.error('登录失败，请重试')
    console.log('Failed:', errorInfo)
  }

  return (
    <div className=" w-full h-screen flex justify-center items-center bg-[#fff5ff]">
      <div className=" w-[1000px] h-[600px] flex justify-between bg-[#ffeff9] shadow-lg rounded-3xl overflow-hidden">
        {/* left-info card */}
        <div className=" w-[500px] h-full shadow-md relative flex items-center justify-center overflow-hidden">
          <div className=" absolute w-[500px] h-[500px] rounded-[50%] bottom-[-48%] left-[-55%] shadow-inner"></div>
          <div className="absolute w-[300px] h-[300px] rounded-[50%] top-[-25%] left-[65%] shadow-inner rotate-180"></div>
          <div className="flex flex-col justify-center items-center">
            <Typography.Title level={3} className=" text-center">
              {teamInfo.teamName}
            </Typography.Title>
            <TeamLogo />
          </div>
        </div>
        {/* right-login card */}
        <div className="w-[500px] h-[600px] flex items-center justify-center">
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Typography.Title level={4} className=" text-center">
              登录
            </Typography.Title>

            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: '请输入账号!' }]}
            >
              <Input className="input" />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password className="input" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 4, span: 16 }}
            >
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
              <Button type="primary" danger htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
