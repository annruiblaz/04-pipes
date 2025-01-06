import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'canFlyPipe'
})
export class CanFlyPipe implements PipeTransform{
    transform(canFly: boolean) {
        return (canFly) ? 'vuela': 'no vuela';
    }

}