import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [AppComponent],   //declarar e registrarv todos os components que trabalham juntos
    bootstrap: [AppComponent],
    imports: [BrowserModule, HeaderComponent,UserComponent, TasksComponent]
})
export class AppModule {

}