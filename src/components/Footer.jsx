import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="w-auto h-10 mx-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="flex justify-center -my-1 gap-x-6">
              <NavLink href="#features">业务一览</NavLink>
              <NavLink href="#testimonials">关于我们</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center py-10 border-t border-slate-400/10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://join.slack.com/t/wmjtyd/shared_invite/zt-1hgf4l11y-htBTZa13JQWfYgSJBHMawA"
              className="group"
              aria-label="TaxPal on Slack"
            >
              <svg t="1665317131629" className="w-6 h-6 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2576" width="200" height="200"><path d="M925.5 541.9c-12.2-37.6-52.6-58.1-90.1-45.9l-80 26L703 360.9l80-26c37.6-12.2 58.1-52.6 45.9-90.1-12.2-37.6-52.6-58.1-90.1-45.9l-80 26-26.2-80.6c-12.2-37.6-52.6-58.1-90.1-45.9-37.5 12.2-58.1 52.6-45.9 90.1l26.2 80.6-161.1 52.4-26.2-80.6c-12.2-37.6-52.6-58.1-90.1-45.9s-58.1 52.6-45.9 90.1l26.2 80.6-81.1 26.4c-37.6 12.2-58.1 52.6-45.9 90.1 12.2 37.6 52.6 58.1 90.1 45.9l81.1-26.4 52.4 161.1-81.3 26.3c-37.6 12.2-58.1 52.6-45.9 90.1 12.2 37.6 52.6 58.1 90.1 45.9l81.1-26.4 26.2 80.6c12.2 37.6 52.6 58.1 90.1 45.9 37.6-12.2 58.1-52.6 45.9-90.1l-26.2-80.6 161.1-52.4 26.2 80.6c12.2 37.6 52.6 58.1 90.1 45.9 37.6-12.2 58.1-52.6 45.9-90.1l-26-80.5 80-26c37.5-12.1 58.1-52.5 45.9-90.1z m-467.3 76.7l-52.4-161.1L567 405.1l52.4 161.1-161.2 52.4z" p-id="25717" fill="#bfbfbf"></path></svg>
            </Link>
            <Link
              href="https://github.com/wmjtyd"
              className="group"
              aria-label="TaxPal on GitHub"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
          版权所有             <Link
              href="https://beian.miit.gov.cn/#/Integrated/index"
              className="group"
              aria-label="TaxPal on GitHub"
            >
              <span className='underline underline-offset-1'>
              京ICP备15057593号</span></Link> 
            Copyright &copy; {new Date().getFullYear()} WMJYYD. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
