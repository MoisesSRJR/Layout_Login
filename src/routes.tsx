import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../src/components/login/login';
import { CriarLogin } from '../src/components/criar_login/criar_login';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/criarlogin' component={CriarLogin}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;