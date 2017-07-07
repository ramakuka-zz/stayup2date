Stayup2dateSchema = GraphQL::Schema.define do
  id_from_object ->(object, type_definition, query_ctx) {
    GraphQL::Schema::UniqueWithinType.encode(object.class.name, object.id)
  }

  # Given a string UUID, find the object
  object_from_id ->(id, query_ctx) {
    class_name, item_id = GraphQL::Schema::UniqueWithinType.decode(id)
    class_name.constantize.find(item_id)
  }

  resolve_type ->(obj, ctx) {
    "Types::#{obj.class.name}Type".constantize
  }

  query Types::QueryType
  #mutation Mutations::MutationType


end
