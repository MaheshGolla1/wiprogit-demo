package assignments;
import java.util.*;

class CD implements Comparable<CD> {
    private String title;
    private String singer;

    public CD(String title, String singer) {
        this.title = title;
        this.singer = singer;
    }

    public String getTitle() {
        return title;
    }

    public String getSinger() {
        return singer;
    }

    @Override
    public int compareTo(CD other) {
        return this.singer.compareToIgnoreCase(other.singer);
    }

    @Override
    public String toString() {
        return "Title: " + title + ", Singer: " + singer;
    }
}

public class Q40 {
    public static void main(String[] args) {
        List<CD> cds = new ArrayList<>();
        cds.add(new CD("Melody Hits", "Sid Sriram"));
        cds.add(new CD("Mass Beats", "Mangli"));
        cds.add(new CD("Romantic Tunes", "Chinmayi Sripada"));
        cds.add(new CD("Folk Specials", "Geetha Madhuri"));
        cds.add(new CD("Classic Melodies", "Chithra"));
        cds.add(new CD("Devotional Songs", "Balasubrahmanyam"));

        Collections.sort(cds);

        for (CD cd : cds) {
            System.out.println(cd);
        }
    }
}

/* Title: Devotional Songs, Singer: Balasubrahmanyam
Title: Romantic Tunes, Singer: Chinmayi Sripada
Title: Classic Melodies, Singer: Chithra
Title: Folk Specials, Singer: Geetha Madhuri
Title: Mass Beats, Singer: Mangli
Title: Melody Hits, Singer: Sid Sriram
*/