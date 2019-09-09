import CompanyData from '@/modules/company/components/CompanyData'
import CompanyPage from '@/modules/company/components/CompanyPage'
import CompanyTable from '@/modules/company/components/CompanyTable'
import Home from '@/modules/company/components/Home'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/company-data'
      },
      {
        path: '/company-data',
        name: 'company-data',
        component: CompanyData
      },
      {
        path: '/company-page',
        name: 'company-page',
        component: CompanyPage
      },
      {
        path: '/company-table',
        name: 'company-table',
        component: CompanyTable
      }
    ]
  }
]
