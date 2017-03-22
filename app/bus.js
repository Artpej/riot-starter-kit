import riot from 'riot'

export default class Bus {

  constructor(){
    riot.observable(this)
  }

  send(event, args){
    this.trigger(event, args)
  }

}
