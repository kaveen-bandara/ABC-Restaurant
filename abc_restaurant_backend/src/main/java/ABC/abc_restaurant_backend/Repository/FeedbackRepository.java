package ABC.abc_restaurant_backend.Repository;

import ABC.abc_restaurant_backend.Entity.Feedback;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends MongoRepository<Feedback, ObjectId> {

}
