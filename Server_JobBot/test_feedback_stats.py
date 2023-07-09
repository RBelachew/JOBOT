import pytest
from server import inc_intents


def test_inc_intents():
    assert inc_intents(None, None) == {}
    assert inc_intents({}, []) == {}
    assert inc_intents({"found jobs": 7}, []) == {"found jobs": 7}
    assert inc_intents({}, ["found jobs", "too long", "self search"]) == {"found jobs": 1, "too long": 1,
                                                                          "self search": 1}
    assert inc_intents({"found jobs": 7}, ["found jobs", "too long", "self search"]) == {"found jobs": 8, "too long": 1,
                                                                                         "self search": 1}
    assert inc_intents({"found jobs": -2, "too long": 0}, ["found jobs", "too long", "self search"]) == {
        "found jobs": -1, "too long": 1, "self search": 1}


if __name__ == '__main__':
    pytest.main()
