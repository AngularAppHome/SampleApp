import {Component,OnInit} from '@angular/core'
import { ActivatedRoute , Router} from '@angular/router'

@Component({
    selector:'app-service',
    templateUrl:'./app.service.component.html'
})
export class ServiceComponent implements OnInit{
    constructor(private route:ActivatedRoute,private router:Router){
        this.route.params.subscribe(res=>console.log(res.id));
    }

    ngOnInit(){

    }
    sendMeHome(){
        this.router.navigate(['']);
    }
}

