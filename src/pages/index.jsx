import Head from 'next/head'
import { useRouter } from "next/router";
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

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
        <SecondaryFeatures />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
