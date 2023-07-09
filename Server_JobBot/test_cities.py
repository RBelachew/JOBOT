import pytest
from server import get_cities_from_areas


def test_get_cities_from_areas():
    assert sorted(get_cities_from_areas(["South"], ["South", "Southern", "Israel"])) == sorted(["Qiryat Gat", "Ashdod"])
    assert sorted(get_cities_from_areas(["North"], ["North", "Northern", "Israel"])) == sorted(["Haifa"])
    assert sorted(get_cities_from_areas(["Central"], ["Central", "Israel"])) == sorted(
        ["Herzliya", "Jerusalem", "Netanya", "Petah Tikva", "Raanana", "Ramat Gan",
         "Rishon LeZiyyon", "Tel Aviv", "Tel Aviv-Yafo", "Kfar Saba", "Rehovot", "Hod HaSharon",
         "Bnei Brak", "Giv`atayim", "Lod", "Holon", "Yavne", "Ness Ziona"])
    assert sorted(
        get_cities_from_areas(["All"], ["North", "Northern", "South", "Southern", "Central", "Israel"])) == sorted(
        ["Haifa", "Qiryat Gat", "Ashdod", "Herzliya",
         "Jerusalem", "Netanya", "Petah Tikva", "Raanana", "Ramat Gan", "Rishon LeZiyyon", "Tel Aviv",
         "Tel Aviv-Yafo", "Kfar Saba", "Rehovot", "Hod HaSharon",
         "Bnei Brak", "Giv`atayim", "Lod", "Holon", "Yavne", "Ness Ziona"])
    assert sorted(get_cities_from_areas(["North"], ["All", "Haifa", "North", "Northern", "Israel"])) == []
    assert sorted(get_cities_from_areas(["North", "All"],
                                        ["North", "Northern", "South", "Southern", "Central", "Israel"])) == sorted(
        ["Haifa", "Qiryat Gat", "Ashdod", "Herzliya",
         "Jerusalem", "Netanya", "Petah Tikva", "Raanana", "Ramat Gan", "Rishon LeZiyyon", "Tel Aviv",
         "Tel Aviv-Yafo", "Kfar Saba", "Rehovot", "Hod HaSharon",
         "Bnei Brak", "Giv`atayim", "Lod", "Holon", "Yavne", "Ness Ziona"])
    assert sorted(get_cities_from_areas(["North"], [])) == sorted(["Haifa", "Israel", "North", "Northern"])
    assert sorted(get_cities_from_areas([], ["North", "Northern", "South", "Southern", "Central", "Israel"])) == []
    assert sorted(get_cities_from_areas([], [])) == []
    assert sorted(get_cities_from_areas(None, None)) == []


if __name__ == '__main__':
    pytest.main()
