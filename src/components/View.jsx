import * as React from "react";
import { Grid, Dimmer, Loader } from "semantic-ui-react";
import { Map } from "../containers/Map";
import { Title } from "./Title";
import { Cuisines } from "../containers/Cuisines";
import * as Styles from "../assets/CustomStyles";

export const View = ({ isFetchingGraph, isFetchingCuisines }) => (
    <Grid celled="internally" className={Styles.View}>
        <Grid.Row>
            <Grid.Column width={12}>
                {
                    isFetchingGraph ?
                    (
                        <Dimmer active inverted>
                          <Loader size="large"></Loader>
                        </Dimmer>
                    )
                    :
                    (
                        <Map />
                    )
                }
            </Grid.Column>
            <Grid.Column width={4}>
                <Grid.Row>
                    <Title />
                </Grid.Row>
                <Grid.Row>
                    {
                        isFetchingCuisines ?
                        (
                              <Loader size="large"></Loader>
                        )
                        :
                        (
                            <Cuisines />
                        )
                    }
                </Grid.Row>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);