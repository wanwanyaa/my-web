import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { inputChange } from './store/createActions'
import './index.less'
import ReactStudy from './ReactStudy'
import writeArticle from './writeArticle'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Index extends React.Component {
  constructor (props) {
    super(props);
    // this.state = {}
  }
  render() {

    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['5']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">HTML</Menu.Item>
            <Menu.Item key="2">CSS</Menu.Item>
            <Menu.Item key="3">JS</Menu.Item>
            <Menu.Item key="4">VUE</Menu.Item>
            <Menu.Item key="5">REACT</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="read" />
                    React学习
                  </span>
                }
              >
                <Menu.Item key="1"><Link to="/home/reactStudy">React路由</Link></Menu.Item>
                <Menu.Item key="2">Redux</Menu.Item>
                <Menu.Item key="3">Immutable</Menu.Item>
                <Menu.Item key="4">JSX</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="read" />
                    写点东西
                  </span>
                }
              >
                <Menu.Item key="5">文章</Menu.Item>
                <Menu.Item key="6">笔记</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px',
              height: '100vh',
              position: 'fixed',
              right: -200,
              width:'100%'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path='/home/reactStudy' component={ ReactStudy }></Route>
                <Route path='/home/writeArticle' component={ writeArticle }></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//     inputVal: state.getIn(['home','inputVal'])
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     // inputChange(value) {
//     //   dispatch(inputChange(value))
//     // }
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Index)
export default Index
