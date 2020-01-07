import React from 'react';
import { Card, Grid } from 'semantic-ui-react'


export default function Planets({ data }) {
    return(
        <div>
        <h1>People</h1>
        <Grid columns={3}>
            {data.map((people, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Description>
                                    <strong>Climate</strong>
                                    <p>{people.climate}</p>
                                    <strong>Diameter</strong>
                                    <p>{people.diameter}</p>
                                    <strong>Population</strong>
                                    <p>{people.population}</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
        </div>
    )
}