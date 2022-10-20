import Head from 'next/head'
import { useRouter } from "next/router";
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Introduction } from '@/components/Introduction'
import { Testimonial } from '@/components/Testimonial'
import avatarImage1 from '@/images/y.jpg'

export default function Home(props) {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  return (
    <>
      <Head>
        <title>{locale=="zh-CN"?"精通有道 - 用数据精准融通各渠道":"JTYD -Data-driven Marketing"}</title>
        <meta
          name="description"
          content="利用 新技术、新模式、大数据
          为企业及个人提供方法论， 寻找新的增长点!Leverage new technologies, new models, and big data
          Provide methodologies for companies and individuals to find new growth points!"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
      <Introduction />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: '杨巅峰',
          role: '团队rust组组长',
          image:avatarImage1,
        }}
      >        <p>
     RUST 基础课程，进阶学习，持续更新中.......
    </p>
  </Testimonial>
        <SecondaryFeatures />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
