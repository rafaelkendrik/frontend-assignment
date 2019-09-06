import CompanyDataPage from '@/modules/company/components/CompanyDataPage'
import HomePage from '@/modules/company/components/HomePage'

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    children: [
      {
        path: '/company-data',
        name: 'company-data',
        component: CompanyDataPage
      }
    ]
  }
]
