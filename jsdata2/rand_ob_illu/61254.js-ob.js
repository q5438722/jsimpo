const fn = ({
    foo = ({} = {})
}) => {
    return foo;
};

true && fn({});
