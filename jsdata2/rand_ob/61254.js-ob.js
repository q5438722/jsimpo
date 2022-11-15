var fn = ({
    foo: foo = {} = {}
}) => {
    return foo;
};
!![] && fn({});
