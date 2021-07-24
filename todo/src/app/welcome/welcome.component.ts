import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, HelloWorldBean } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  messege = 'some welcome messege'
  welcomeMessageFromService : string | undefined
  name = ''
  //ActivatedRoute
  constructor( 
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.messege)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    //console.log(this.service.executeHelloWorlBeanService());
    this.service.executeHelloWorlBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log("get welcome message")
    //console.log('last line of getWelcomeMessage')
  }

  getWelcomeMessageWithParameter(){
    //console.log(this.service.executeHelloWorlBeanService());
    this.service.executeHelloWorlServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log("get welcome message")
    //console.log('last line of getWelcomeMessage')
  }

  handleSuccessfulResponse(response:HelloWorldBean){
    this.welcomeMessageFromService = response.message
    //console.log(response)
    //console.log(response.message)
  }

  handleErrorResponse(error){
    //console.log(error)
    //console.log(error.error)
    //console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message
  }

}
