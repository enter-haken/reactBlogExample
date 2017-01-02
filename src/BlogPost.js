import React, {
    Component
} from 'react';

import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';

class BlogPost extends Component {
    
    render() {
      return <Card expanded={true} style={{ marginBottom : '10px' }}>
                <CardHeader
                    title={this.props.title}
                    subtitle={this.props.subTitle}
                />
                <CardText>
                    {this.props.text} 
                </CardText>
              </Card>
    }
}

export default BlogPost;
