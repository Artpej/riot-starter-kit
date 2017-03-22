import riot from 'riot'
import route from 'riot-route'


import './components/layout'
import './components/home'



riot.mount('layout')

route('/home', () => {
    riot.mount('div#main','home');
    })


route( () => {
    route('home')
    })


route.start(true);


