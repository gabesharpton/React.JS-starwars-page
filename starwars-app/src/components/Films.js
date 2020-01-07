import React from 'react';
import { Card, Grid } from 'semantic-ui-react'


export default function Films({ data }) {
    return(
        <div>
        <h1>Films</h1>
        <Grid columns={3}>
            {data.map((films, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{films.title}</Card.Header>
                                <Card.Description>
                                    <strong>Director</strong>
                                    <p>{films.director}</p>
                                    <strong>Producer</strong>
                                    <p>{films.producer}</p>
                                    <p>{films.opening_crawl}</p>
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