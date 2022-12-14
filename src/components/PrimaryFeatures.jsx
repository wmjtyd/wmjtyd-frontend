import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import screenshotIT from '@/images/screenshots/it.jpg'
import screenshotStock from '@/images/screenshots/Stock.jpg'
import screenshotVatTarget from '@/images/screenshots/target.jpg'
import backgroundImage from '@/images/background-features.jpg'

const features = {
  'zh-CN': [
    {
      title: '信号服务',
      description:
        '利用业界领先技术取得交易信号，让您的交易抢占先机、无往不利。',
      image: screenshotStock,
    },
    {
      title: 'It系统开发    ',
      description: '咨询具有数十年专业开发经验的工程师，为您的系统锦上添花。',
      image: screenshotIT,
    },
    {
      title: '任务平台',
      description: '聚合团队及成员积累，结合行业专家经验，进行项目孵化',
      image: screenshotVatTarget,
    },
  ],
  'en-US': [
    {
      title: 'Signal Service',
      description:
        'Use the leading technology to get trading signals, so that your trading can seize the opportunity and be successful.',
      image: screenshotStock,
    },
    {
      title: 'It system development',   
      description: 'Consult with professional engineers with decades of development experience to add beauty to your system.',
      image: screenshotIT,
    },
    {
      title: 'Task platform',
      description: 'Aggregate team and member accumulation, combine industry expert experience, and incubate projects',
      image: screenshotVatTarget,
    },
  ],
}

export function PrimaryFeatures() {
  const { query } = useRouter()
  const locale = query['en-US'] == '' ? 'en-US' : 'zh-CN'
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative pt-20 overflow-hidden bg-blue-600 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl md:text-5xl">
            {locale === 'zh-CN' ? '业务一览' : 'Business Overview'}{' '}
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            {locale === 'zh-CN'
              ? 'WMJTYD有众多业务，满足您公司的各项需求。'
              : 'WMJTYD has numerous businesses to meet the various needs of your company.'}
          </p>
        </div>
        <Tab.Group
          as="div"
          className="grid items-center grid-cols-1 pt-10 mt-16 gap-y-2 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex px-4 gap-x-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features[locale].map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features[locale].map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative max-w-2xl mx-auto text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
