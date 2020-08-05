//        let form = <HTMLElement>document.getElementById('loginForm');
//          form.addEventListener('submit', (event) => {event.preventDefault(); this.submitForm()});

class CarPanel {

    constructor() {
        const form = <HTMLElement>document.getElementById('vform');
        form.addEventListener('submit', (event) => {event.preventDefault(); this.submitForm()});
    }

    public submitForm(): void {
        function createCar(plate:string,color:string,brand:string){
            var plate = (<HTMLInputElement>document.getElementById("plate")).value;
            var color = (<HTMLInputElement>document.getElementById("color")).value;
            var brand = (<HTMLInputElement>document.getElementById("brand")).value;
    
            let car=new Car(plate,color,brand);
            car.addWheel(new Wheel(2,"SEAT"));
        
        const showInfo = <HTMLElement>document.getElementById('showInfo');
        const elementFirst: HTMLElement = document.createElement('pre');
        const elementSecond: HTMLElement = document.createElement('pre');
        const elementThird: HTMLElement = document.createElement('pre');

        elementFirst.innerHTML = 'MATRÍCULA COCHE: ' + car.plate;
        showInfo.appendChild(elementFirst);
        elementSecond.innerHTML = 'COLOR COCHE: : ' + car.color;
        showInfo.appendChild(elementSecond);
        elementThird.innerHTML = 'MARCA COCHE: : ' + car.brand;
        showInfo.appendChild(elementThird);
        }
    }

}

new CarPanel();


