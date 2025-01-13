import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { MenuComponent } from './menu/menu.component';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';
import { StylebindingdemoComponent } from './stylebindingdemo/stylebindingdemo.component';
import { ClassbindingdemoComponent } from './classbindingdemo/classbindingdemo.component';
import { NgfordemoComponent } from './ngfordemo/ngfordemo.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveXComponent } from './directive-x/directive-x.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { Parent4Component } from './parent4/parent4.component';
import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child5/child5.component';
import { Parent5Component } from './parent5/parent5.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MenuComponent,
    EventBindingDemoComponent,
    StylebindingdemoComponent,
    ClassbindingdemoComponent,
    NgfordemoComponent,
    BindingComponent,
    DirectiveXComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    DatabindingComponent,
    StructuraldirectiveComponent,
    Parent2Component,
    Parent3Component,
    Child2Component,
    Child3Component,
    TwoWayComponent,
    Parent4Component,
    Child4Component,
    Child5Component,
    Parent5Component,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
