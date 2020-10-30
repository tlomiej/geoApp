import React from 'react';
import { searchModel } from "./../models/SearchModel";


interface Props {
    result: Array<searchModel>;
    resultMapQuest: any;
}

export class SearchResult<SearchBox> extends React.Component<Props> {


    componentDidUpdate() {
        //console.log("zmiana2")
    }

    resultStyle = {
        color: "black",
        padding: '10px'
    } as React.CSSProperties;
    render() {
        return (
            <div>

                {this.props.result?.map((obj, index) => {

                    return <div style={this.resultStyle} key={index}>{obj.display_name}</div>;
                })}

                s
                {/*  MapQuest

                <ul>
                    {this.props.resultMapQuest.results[0].locations?.map((obj: any, index: any) => {
                        return <li style={this.resultStyle} key={index}>{obj.adminArea5}</li>;
                    })}
                </ul> */}
            </div>)
    }
}

export default SearchResult;
