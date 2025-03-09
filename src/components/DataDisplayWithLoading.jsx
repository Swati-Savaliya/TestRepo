export const withLoading = (WrappedComponent) => {
    return (props) => {
        const { isLoading } = props;
        if (isLoading) {
            return <div>Loading...</div>
        }
        return <WrappedComponent {...props} />;
    };
};



const DataDisplay = ({ data }) => <div>Data: {data}</div>;

const DataDisplayWithLoading = withLoading(DataDisplay);
export default DataDisplayWithLoading