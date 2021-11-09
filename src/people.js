const filterByGender = (people, gender) => {
    return people.filter(p => p.gender === gender);
}

module.exports = {filterByGender}