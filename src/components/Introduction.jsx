import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="text-4xl font-bold tracking-tight font-display text-slate-900">
          社区知识共享, 为开源贡献力量,同行交流,共同成长
        </p>
        <p className="mt-4">
        美国的维基百科和 Apache 都是由程序员业余搭建的，随着中国的日益强大和互联网的发展，我们也完全有能力做这些事——大家其实业余都有很多积累，但是一个人的力量有限。如果我们聚合起来朝着一个目标去积累，量变就会产生质变，聚沙成塔。
        </p>
        <p className="mt-4">
        精通有道DAO（Decentralized Autonomous Orgnization,即去中心化的自治组织） 
        </p>
        <p className="mt-4">
        加入团队不仅可以认识一群分布全球志同道合的朋友、与一群热爱技术的朋友一起愉快共事，另外也可以透过任务达到技术上的成长。最后，我们也会共享项目成功后的收益
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            '1. 传统股票数据（在不断增加将来开源）',
            '2. crypto base tool（数据及下单）            ',
            '3. 策略研究            ',
            '4. web 用户管理            ',
            '5. 深度学习  ',
            '6. 舆情、自然语言          ',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="flex-none w-8 h-8 fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
        社区建设、治理与运营,营销 
        </p>
        <p className="mt-10">
          <Link
            href="https://github.com/wmjtyd"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            开源项目{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
