import pytest
from server import find_experience_education_in_history

# Constants
USERNAME = "user_name"
SHIRA = "Shira"
HISTORY = "history"
FIELD = "field"
EXPERIANCE_EDUCATION = "experiance & education"
MARKETING = "Marketing"
ENGINEERING = "Engineering"


def test_find_experinace_education_in_history():
    # normal case
    user_1 = {USERNAME: SHIRA, HISTORY: [{FIELD: "Other", EXPERIANCE_EDUCATION: "-"},
                                         {FIELD: ENGINEERING,
                                          EXPERIANCE_EDUCATION: "I have a bachelor's degree in computer engineering"},
                                         {FIELD: MARKETING, EXPERIANCE_EDUCATION: "-"}]}
    assert find_experience_education_in_history(user_1,
                                                ENGINEERING) == "I have a bachelor's degree in computer engineering"

    user_1[HISTORY] = [{FIELD: MARKETING, EXPERIANCE_EDUCATION: "M"}]
    assert find_experience_education_in_history(user_1, ENGINEERING) == "-"

    user_1[HISTORY] = [{FIELD: ENGINEERING, EXPERIANCE_EDUCATION: "A"}, {FIELD: ENGINEERING, EXPERIANCE_EDUCATION: "B"},
                       {FIELD: MARKETING, EXPERIANCE_EDUCATION: "C"}]
    assert find_experience_education_in_history(user_1, ENGINEERING) == "B"

    # None or empty values
    user_2 = {USERNAME: SHIRA}
    assert find_experience_education_in_history(user_2, MARKETING) == "-"

    user_3 = {USERNAME: SHIRA, HISTORY: []}
    assert find_experience_education_in_history(user_3, MARKETING) == "-"

    user_3 = {USERNAME: SHIRA, HISTORY: [{}]}
    assert find_experience_education_in_history(user_3, MARKETING) == "-"

    user_3[HISTORY] = [{FIELD: MARKETING}]
    assert find_experience_education_in_history(user_3, MARKETING) == "-"

    assert find_experience_education_in_history(user_1, "") == "-"
    assert find_experience_education_in_history(None, MARKETING) == "-"
    assert find_experience_education_in_history(user_1, None) == "-"
    assert find_experience_education_in_history(None, None) == "-"


if __name__ == '__main__':
    pytest.main()
