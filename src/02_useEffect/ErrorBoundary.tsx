import { Component, ErrorInfo } from "react";

interface Props {
    children: React.ReactNode;
}

class ErrorBoundary extends Component<Props> {

    state = {
        error: false,
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            error: true,
        });
        console.error({error, errorInfo});
    }
    render() {
        if (this.state.error) return <div>에러가 발생했습니다.</div>
        return this.props.children;
    }
}

export default ErrorBoundary;