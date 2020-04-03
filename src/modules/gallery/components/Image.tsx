import * as React from 'react';
import classNames from 'classnames';

export type Props = {
  src: string,
  className?: string,
  onClick?: () => void,
};

export type State = {
  isLoading: boolean,
};

class Image extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isLoading: true };
  }

  onLoad = () => {
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    const { className, onClick } = this.props;
    return (
      <span>
        {isLoading && <span>Loading</span>}
        <img
          className={classNames('image', className, { isLoading })}
          src={this.props.src}
          onLoad={this.onLoad}
          onClick={onClick}
        />
      </span>
    );
  }
}

export default Image;
