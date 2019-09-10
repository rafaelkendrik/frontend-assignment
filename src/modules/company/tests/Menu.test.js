import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import MenuComponent from '../components/Menu'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

const MenuFactory = propsData =>
  shallowMount(MenuComponent, {
    stubs: ['router-link', 'router-view'],
    localVue,
    router,
    propsData
  })

describe('Menu', () => {
  it('should render router-links', () => {
    const data = {
      menu: [
        { link: '/company-data', label: 'Company Data' },
      ]
    }

    const Menu = MenuFactory(data)
    const itemLabel = data.menu.map(item => item.label)

    expect(Menu.text()).toContain(itemLabel)
  })
})
