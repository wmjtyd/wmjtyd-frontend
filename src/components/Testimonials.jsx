import Image from 'next/future/image'
import { Container } from '@/components/Container'
import { useRouter } from 'next/router'

const testimonials ={"zh-CN":[
  [
    {
      content:
        '聚合盈余力量，为企业、个人提供方法论，需求新的增长点，推动社会进步',
      author: {
        type: '使命',
        description: '',
      },
    },
    {
      content:
        '通过聚合、创新、分享，不断创造技术价值和财富，成为一个有影响力的团队',
      author: {
        type: '愿景',
        description: '',
      },
    },
  ],
  [
    {
      content: '先有效率，再有诚信，然后有收获',
      author: {
        type: '价值观',
        description: '',
      },
    },
    {
      content:
        '任务、电商、人力 改成 、大数据方案  、低代码管理系统、舆情、知识图谱、分布式任务、物联终端平台',
      author: {
        type: '项目孵化',
        description: '',
      },
    },
  ],
  [
    {
      content:
        '一个人的力量有限。如果我们聚合起来朝着一个目标去积累，量变就会产生质变，聚沙成塔。',
      author: {
        type: '目标',
        description: '',
      },
    },
    {
      content:
        '我们是一群热爱技术的80后， 参与过线互联网公司的数据模型建设，拥有丰富的互联网数据分析经验。        ',
      author: {
        type: '我们是谁',
        description: '',
      },
    },
  ],
],
"en-US":[
  [
    {
      content:
        'Aggregate the surplus power to provide enterprises and individuals with methodologies, new growth points, and promote social progress',
      author: {
        type: 'Mission',
        description: '',
      },
    },
    {
      content:
        'By aggregating, innovating, and sharing, we continue to create technological value and wealth and become an influential team',
      author: {
        type: 'Vision',
        description: '',
      },
    },
  ],
  [
    {
      content: 'First efficient, then honest, and then have a harvest',
      author: {
        type: 'Value',
        description: '',
      },
    },
    {
      content:
        'Task, e-commerce, manpower changed to, big data solution, low code management system, public opinion, knowledge graph, distributed task, Internet of Things terminal platform',
      author: {
        type: 'Project incubation',
        description: '',
      },
    },
  ],
  [
    {
      content:
        'The power of one person is limited. If we aggregate together to accumulate towards a goal, the quantity will change into quality, and the sand will be turned into a tower.',
      author: {
        type: 'Goal',
        description: '',
      },
    },
    {
      content:
        'We are a group of people who love technology in the 80s, participated in the data model construction of Internet companies, and have rich Internet data analysis experience.',
      author: {
        type: 'Who are we',
        description: '',
      },
    },
  ],
]
}

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  const { query } = useRouter()
  const locale = query['en-US'] == '' ? 'en-US' : 'zh-CN'
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-20 bg-slate-50 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto md:text-center">
          <h2 className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl">
            {locale === 'zh-CN' ? '关于我们' : 'About Us'}{' '}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {locale === 'zh-CN'
              ? '团队成立于2012年，聚合了大量来自高校、自由职业者及其他盈余力量，通过挖掘技术发现未知、创造价值，是公司形式的有效补充。'
              : "The team was established in 2012, aggregating a large number of talents from universities, freelancers and other surplus forces, through the exploration of technology to discover the unknown and create value, is an effective supplement to the company's form."}
          </p>
        </div>
        <ul
          description="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials[locale].map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul
                description="list"
                className="flex flex-col gap-y-6 sm:gap-y-8"
              >
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative p-6 bg-white shadow-xl rounded-2xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                        <div>
                          <div className="text-base font-display text-slate-900">
                            {testimonial.author.type}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.description}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50"></div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
