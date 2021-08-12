import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home, Contact, AboutMe} from '.'
import { ProjectPage } from './project';

export function Routes(){
    return(
        
            <Switch>
            <Route exact path ="/">
                <Home/>

            </Route>
            <Route exact path ="/contact">
                <Contact/>
            </Route>
            <Route exact path ="/aboutMe">
                <AboutMe/>
            </Route>
            <Route exact path ="/project">
                <ProjectPage/>
            </Route>
        </Switch>
        
        
    );
}